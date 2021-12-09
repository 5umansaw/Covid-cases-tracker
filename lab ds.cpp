#include <bits/stdc++.h>
using namespace std;

int main() {
 int n,k;
 cin>>n>>k;

 queue<int> q;
 stack<int> s;
 
 for(int i=0;i<n;i++){
    int x;
    cin>>x;
    q.push(x);
 }
 while(k>0){
    int x=q.front();
    s.push(x);
    q.pop();
    k--;
 }

 while(!s.empty()){
    cout<<s.top()<<" ";
    s.pop();
 }
  while(!q.empty()){
     cout<<q.front()<<" ";
     q.pop();
  }

}