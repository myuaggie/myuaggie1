#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <map>
using namespace std;

int main() {
	string fileName;
	fstream f;
	
	cout << "Input file name?";
	cin >> fileName;
	f.open(fileName);
	while (!f.is_open()) {
		cout << "Unable to open that file.Try again." << endl;
		cout << "Input file name? ";
		cin >> fileName;
		f.open(fileName);
	}

	int n;
	cout << "Number of  letters of suffix?";
	cin >> n;

	map<string, int> m;
	string line;
	while (f >> line) {
		if (line.size() < n) continue;
		m[line.substr(line.size() - n, n)]++;
	}

	vector<string> member;
	vector<int> value;
	for (map<string, int>::iterator k = m.begin(); k != m.end(); k++) {
		member.push_back((*k).first);
		value.push_back((*k).second);
	}

	string temp1;
	int temp2;
	for (int idx = 0; idx < member.size() - 1; idx++) {  //ц╟ещ
		for (int idx2 = 0; idx2 < member.size() - 1 - idx; idx2++)
		{
			if (value[idx2] > value[idx2 + 1])
			{

				temp1 = member[idx2];
				member[idx2] = member[idx2 + 1];
				member[idx2 + 1] = temp1;
				temp2 = value[idx2];
				value[idx2] = value[idx2 + 1];
				value[idx2 + 1] = temp2;
			}
		}
	}

	for (int i = member.size() - 1; i > member.size() - 11; i--) {
		cout << member[i] << ":" << m[member[i]] << endl;
	}
	cin.get();
	cin.get();

	return 0;
}