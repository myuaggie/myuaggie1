//F1603702   516030910177
//this is a calculator
//calculate grammar is at the bottom
/*function added:
1. factorial
2. M.R
3. variable:
use'let var_name = var_value;' to declare the variable
var_name support alpha & digit mixed (no space)
*/

#include "token.h"


const char quit = 'q';
const char print = ';';
const char number = 'n';
const char prompt = '>';
const char result = '=';
const char let = 'l';  //kind of let
const char na = 'a';    //kind of var_name
const string declkey = "let";  //let function(for declaration)
const char memory = 'M';
const char record = 'R';   //M.R funciton
double fx( double x);

Vector<Variable> var_table = {};         //record all the variable declared
Token_stream ts;              // an object of token_stream
double r;               // record value from memroy
stringstream inputstream;
char ch_del;
double ax3 = 0;
double bx2 = 0;
double cx = 0;
double d = 0;

int main()
{
	try {

		Calculator_window win(Point(0, 0), 800, 800, "Calculator");
		return gui_main();
	}
	catch (runtime_error & e) {
		cerr << e.what() << endl;
		keep_window_open("~~");
		return 1;
	}
	catch (...) {   //other error
		cerr << "exception\n";
		keep_window_open("~~");
		return 2;
	}
}

void Calculator_window::calculate() {
	//while (inputstream) 
	try {
		out_1.put(operation);
		Token t = ts.get();
		while (t.kind == print) {      //clear the ';'
			t = ts.get();
		}
		if (t.kind == quit) return;     //q to quit
		ts.putback(t);           //putback the last char gotten for judge ';'
		double e = statement();
		if (e == -0.00001) { operation = ">"; return; } //deal with the cin like ' let variable_name = value;'
		out_2.put(to_string(e));    //get result
		operation = ">";
	}
	catch (exception & e) {        //get error during calculate
		cerr << e.what() << endl;
		clean_up_mess();
	}
}

// followings are class function

Token_stream::Token_stream() :full(false), buffer('0') {}     //initialize stream

void Token_stream::putback(Token t) {       //put token into stream
	full = true;
	buffer = t;
}

Token Token_stream::get() {
	if (full) {       //get token from stream
		full = false;
		return buffer;
	}
	char ch;
	inputstream >> ch;         //get char from cin
	switch (ch) {
	case '(':case ')':case '*':case '/':case '+':case '-':case '%':case '!':case quit: case print: case result: case memory: case record:  //operators
		return Token(ch);
	case '0':case '1':case '2':case '3':case '4':case '5':case '6':case '7':case '8':case '9':case '.': {  //operands
		inputstream.putback(ch);
		double val;
		inputstream >> val;                     //get the whole operands
		return Token(number, val);
	}
	default: {
		if (isalpha(ch)) {
			string s;
			s += ch;
			while (inputstream.get(ch) && isalpha(ch) || isdigit(ch))  s += ch;    //get the letters(let or variable name)
			inputstream.putback(ch);
			if (s == declkey) return Token(let);        //get token let
			return Token(na, s);      //get token variable 
		}
		error("Bad Token.");       //error
	}
	}
}

void Token_stream::ignore(char c) {
	if (full && buffer.kind == c) { full = false; return; }       //if all the formular gotten,clear the ;
	full = false;
	char ch;
	while (inputstream >> ch) {               //clear the rest formular and ;
		if (ch == c) return;
	}
}

//followings are rule of calculate

double Calculator_window::expression() {                //according to grammar
	double left = term();
	while (true) {
		Token t = ts.get();
		switch (t.kind) {
		case '+': left += term(); break;
		case '-': left -= term(); break;
		case memory: r = left; break;
		default:
			ts.putback(t);
			return left;
		}
	}
}

double Calculator_window::term() {     //according to grammar
	double left = primary();
	while (true) {
		Token t = ts.get();
		switch (t.kind) {
		case '*': left *= primary(); break;
		case '/': {
			double right = primary();
			if (right == 0) {
				operation = ">";
				out_2.put("divide by zero");
				error("divide by zero");
			}
			left /= right;
			break;
		}
		case '%': {
			double right = primary();
			if (right == 0) {
				operation = ">";
				out_2.put("no  % zero");
				error("no % zero");
			}
			int l = int(left);
			int r = int(right);
			if (l != left) {
				operation = ">";
				out_2.put("no double %");
				error("no double %");
			}
			if (r != right) {
				operation = ">";
				out_2.put("no % double");
				error("no % double");
			}
			left = l % r;
			break;
		}
		default:
			ts.putback(t);
			return left;
		}
	}
}

double Calculator_window::primary() {                   // according to grammar
	Token t = ts.get();
	switch (t.kind) {
	case number: {
		Token t2 = ts.get();
		if (t2.kind == '!') {
			return factorial(t.value);
		}
		ts.putback(t2);
		return t.value;
	}
	case record: return r;
	case na: {ts.putback(t); t = find_ariable(); ts.putback(t); return primary(); }
	case '+': return +primary();
	case '-': return -primary();
	case '(': {
		double e = expression();
		Token b = ts.get();
		if (b.kind != ')') {
			operation = ">";
			out_2.put("')' expected.");
			error("')' expected.");
		}
		Token t2 = ts.get();
		if (t2.kind == '!') {
			return factorial(e);
		}
		ts.putback(t2);
		return e; }
	default: {
		operation = ">";
		out_2.put("primary expected.");
		error("primary expected.");
	}
	}
}

double Calculator_window::statement() {     // according to grammar 
	Token t = ts.get();
	switch (t.kind) {
	case let: return declaration();
	default:
		ts.putback(t);
		return expression();
	}
}

double Calculator_window::factorial(double n) {         //calculate factorial
	if (n != int(n)) {
		operation = ">";
		out_2.put("no double !");
		error("no double !");
	}
	if (n < 0) {
		operation = ">";
		out_2.put("no - !");
		error("no - !");
	}
	if (n == 0) return 1;
	return n*factorial(n - 1);
}

void Calculator_window::clean_up_mess() {    //clear error cin
	ts.ignore(print);
}

//followings are function of variable

double Calculator_window::declaration() {
	Token t1 = ts.get();
	if (t1.kind != na) {
		operation = ">";
		out_2.put("name expected in declaration");
		error("name expected in declaration.");
	} //get var_name
	Token t2 = ts.get();
	if (t2.kind != result) {
		operation = ">";
		out_2.put("= miss in declaration of "+t1.name);
		error("= miss in declaration of ", t1.name);
	} //get '='

	double e = expression();    //get var_value
	define_name(t1.name, e);
	return -0.00001;     // return a number as a symbol for declaration
}//new variable declaration:>let var_name = var_value;

bool Calculator_window::is_declared(string var) {
	for (int i = 0; i < var_table.size(); i++) {
		if (var_table[i].name == var) return true;
	}
	return false;
}//judge if the var_name is declared

void Calculator_window::define_name(string var, double val) {
	if (is_declared(var)) {
		operation = ">";
		out_2.put(var + " declared twice");
		error(var, " declared twice");
	}
	Variable v = Variable(var, val);
	var_table.push_back(v);
}//save var_name and var_value to a vector

Token Calculator_window::find_ariable() {
	Token t = ts.get();
	for (int i = 0; i < var_table.size(); i++) {
		if (var_table[i].name == t.name) {
			t = Token(number, var_table[i].value);
			return t;
		}
	}
} // replace the var_name with var_value while calculate

Calculator_window::Calculator_window(Point xy, int x, int y, const string& title) :
	Window(xy, x, y, title),
	out_1(Point(20, 20), 500, 100, ""),
	out_2(Point(540, 20), 180, 100, ""), 
	in_1(Point(520,130), 30,30, "x^3:"),
	in_2(Point(580, 130), 30, 30, "x^2:"),
	in_3(Point(640, 130), 30, 30, "x^1:"),
	in_4(Point(700, 130), 30, 30, "x^0:"),
	operation(">") {
	stringstream ss;
	string number_s;
	int number_i = 0;
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++) {
			number_i = j * 3 + i + 1;
			ss << number_i;
			ss >> number_s;
			num.push_back(new Button(Point(20 + i * 150, 200 + j * 150), 130, 130, to_string(j * 3 + i + 1), cb_input[j * 3 + i]));
			attach(num[i * 3 + j]);
		}
	num.push_back(new Button(Point(20 + 150, 200 + 3 * 150), 130, 130, "0", cb_input[9]));
	num.push_back(new Button(Point(20 + 3 * 150, 200), 130, 130, "+", cb_input[10]));
	num.push_back(new Button(Point(20 + 3 * 150, 200 + 150), 130, 130, "-", cb_input[11]));
	num.push_back(new Button(Point(20 + 3 * 150, 200 + 150 * 2), 130, 130, "*", cb_input[12]));
	num.push_back(new Button(Point(20 + 3 * 150, 200 + 150 * 3), 130, 130, "/", cb_input[13]));
	num.push_back(new Button(Point(20 + 4 * 150, 200), 130, 130, "!", cb_input[14]));
	num.push_back(new Button(Point(20 + 4 * 150, 200 + 150), 130, 130, "=", cb_input[15]));
	num.push_back(new Button(Point(20 + 4 * 150, 200 + 150 * 2), 130, 130, "M", cb_input[16]));
	num.push_back(new Button(Point(20 + 4 * 150, 200 + 150 * 3), 130, 130, "R", cb_input[17]));
	num.push_back(new Button(Point(20, 200 + 3 * 150), 130, 60, "(", cb_input[18]));
	num.push_back(new Button(Point(20,200+3*150+65), 130, 60, ")", cb_input[19]));
	num.push_back(new Button(Point(420 , 130), 30, 30, "%", cb_input[20]));
	num.push_back(new Button(Point(20,130), 30,30, "del", cb_input[21]));
	num.push_back(new Button(Point(60, 130), 30,30, "ac", cb_input[22]));
	num.push_back(new Button(Point(100, 130), 30, 30, "let", cb_input[23]));
	num.push_back(new Button(Point(140, 130), 30, 30, "x", cb_input[24]));
	num.push_back(new Button(Point(180, 130), 30, 30, "y", cb_input[25]));
	num.push_back(new Button(Point(220, 130), 30, 30, "a", cb_input[26]));
	num.push_back(new Button(Point(260, 130), 30, 30, "b", cb_input[27]));
	num.push_back(new Button(Point(300, 130), 30, 30, "c", cb_input[28]));
	num.push_back(new Button(Point(340, 130), 30, 30, "==", cb_input[29]));
	num.push_back(new Button(Point(380, 130), 30, 30, "space", cb_input[30]));
	num.push_back(new Button(Point(460, 130), 30, 30, "f(x)", cb_input[31]));
	num.push_back(new Button(Point(20 + 2 * 150, 200 + 3 * 150), 130, 130, ".", cb_input[32]));
	for (int i = 9; i < 33; i++) {
		attach(num[i]);
	}
	attach(in_1);
	attach(in_2);
	attach(in_3);
	attach(in_4);
	attach(out_1);
	attach(out_2);
}//set all the button

void Calculator_window::input(string i) {
	if (i == "del") //function:del
	{
		if (operation != ">") {
			if (operation.substr(operation.size() - 1, 1) != " ") { //delete space
				inputstream >> ch_del;
				operation = operation.substr(0, operation.size() - 1);
				out_1.put(operation);
				return;
			}
			else { 
				inputstream >> ch_del;
				operation = operation.substr(0, operation.size() - 1);
				inputstream << operation.substr(operation.size() - 1, 1);
				out_1.put(operation);
				return;
			}
		}
		else {  //can't delete ">"
			operation = ">";
			out_1.put(operation);
			return;
		}
	}
	inputstream << i;
	if (i == "ac") {   //function:ac
		operation = ">";
		out_1.put(operation);
		ts.ignore('c');
		var_table = {};
		return;
	}
	/*if (i == "f") {
		operation += "f(x)=";
		out_1.put(operation);
		return;
	}*/
	operation += i;
	out_1.put(operation);
	if (i == ";") calculate();
}

void Calculator_window::draw_fx() {   
	ax3 = in_1.get_int();
	if (ax3 == -999999)ax3 = 0;
	bx2 = in_2.get_int();
	if (bx2 == -999999)bx2 = 0;
	cx = in_3.get_int();
	if (cx == -999999)cx = 0;
	d = in_4.get_int();
	if (d == -999999)d = 0;
	Simple_window win2(Point(0, 0), 200, 100, "Function graphing");
	Function s(fx, -10, 11, Point(100, 50), 50, 10, 10);
	Axis x(Axis::x, Point(20, 50), 160, 16, "x");
	Axis y(Axis::y, Point(100, 80), 60, 6, "y");
	win2.attach(s);
	win2.attach(x);
	win2.attach(y);
	win2.wait_for_button();
}

double fx(double x) {
	return ax3*x*x*x + bx2*x*x + cx*x + d;
}

  /*calculate grammar

  statement:
  expression
  declaration

  quit:  q
  print:  ;

  expression:
  term
  term + expression
  term - exprssion
  expressionM

  term:
  primary
  term * primary
  term / primary
  term % primary

  primary:
  number
  R
  variable
  +primary
  -primary
  (expression)
  (expression)!

  number:
  floating-point-literal
  number!

  */
