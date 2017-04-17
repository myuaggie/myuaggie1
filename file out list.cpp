#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>
int main() {
	using namespace std;
	fstream f;
	string filename;
	cout << "Please enter filename: ";
	cin >> filename;
	f.open(filename);
	vector<double> v;
	double data;
	stringstream s;
	string line;
	while (getline(f,line)) {
		while (s << line) {
			s >> data;
			v.push_back(data);
		}
	}
	return 0;
}