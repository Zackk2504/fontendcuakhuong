#include <iostream>

void menu(){
	printf("1: cong 2 so \n");
	printf("2: tru 2 so \n");
	printf("3: nhan 2 so \n");
	printf("4: chia 2 so \n");
	printf("5: chia du 2 so \n");
	printf("0: thoat chuong trinh \n");
}


void cong(float a,float b){
	float c;
	c=a+b;
	printf("\n %.1f + %.1f = %.1f \n",a,b,c);
}

void tru(float a,float b){
	float d;
	d = a - b;
	printf("\n %.1f - %.1f = %.1f \n",a,b,d);
}

void nhan(float a,float b){
	float e;
	e=a*b;
	printf("\n %.1f * %.1f = %.1f \n",a,b,e);
}

void chia(float a,float b){
	float f;
	f=a/b;
	printf("\n %.1f / %.1f = %.1f \n",a,b,f);
}

void chiadu(float a,float b){
	float l;
	int n;
	l = a / b;
	n = (int)a % (int)b;
	printf("\n %.1f chia %.1f = %.1f du %d \n",a,b,l,n);
}


int main(){
	do{
		int k;
		menu();	
	float a,b;
	printf("Nhap vao so thu 1: ");
	scanf("%f",&a);
	printf("nhap vao so thu 2: ");
	scanf("%f",&b);
	do{
		printf("moi ban chon: ");
		scanf("%d",&k);
		if(k <0 || k>6){
			printf("chi chon trong menu pls \n");
		}
	}
	while(k<0 || k>6);
	switch(k){
		case 1 : 
			printf("ban chon cong 2 so");
			cong(a,b);
			break;	
		case 2 :	
			printf("ban chon tru 2 so ");
			tru(a,b);	
			break;
		case 3 :
			printf("ban chon nhan 2 so ");
			nhan(a,b);
			break;
		case 4 :
			printf("ban chon chia 2 so ");
			chia(a,b);
			break;
		case 5 :
			printf("ban chon chia du ");
			chiadu(a,b);
			break;	
		case 0:
			exit(0);
			break;	
	}	
	}while(true);

}
