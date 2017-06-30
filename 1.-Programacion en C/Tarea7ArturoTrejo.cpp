#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>
 #define n 1000
   /*Declaracion de Funciones*/
  void ingresar(char a[][50],float cal[],int t);
  void imprimir(char a[][50],float cal[],int t);
  void promedio(float cal[],int t);
  void ordenaXnombre(char a[][50],float cal[],int t);
  void ordenaXcalificacion(char a[][50],float cal[],int t);
  void buscalumno(char a[][50],char nom[50],float cal[],int t);


 void main( )/*Cuerpo del programa*/
 {
 system("TITLE SISTEMA PARA INGRESAR ALUMNOS Y CALIFICACIONES, MUESTRA EL PROMEDIO GRUPAL Y ORDENA NOMBRES O CALIFICACIONES");
   system("color A");

   //Declaracion de variables y Arreglos locales
  int cant=0,opcion;
  char alum[n][50],nom[50];
  char op3,op4;
  float calif[n];

 do{ //Inicio. Se ejecuta al menos una vez
    system("cls");
    gotoxy(26,3);
      printf("INSTITUTO CONSORCIO CLAVIJERO\n\n");
    gotoxy(10,4);
      textcolor(7);
      cprintf("\nI.S.C.   A09000448   Arturo Trejo   INGENIERIA DE SOFTWARE\n");
   gotoxy(35,7);
   textcolor(10);
   cprintf("\n***MENU***\n\n");
   printf("\n\t\t\t1.-INGRESAR ALUMNOS Y CALIFICACIONES\n\n");
   printf("\t\t\t2.-IMPRIMIR\n\n");
   printf("\t\t\t3.-PROMEDIO DEL GRUPO\n\n");
   printf("\t\t\t4.-ORDENAR\n\n");
   printf("\t\t\t5.-BUSCAR\n\n");
   gotoxy(25,21);
   textcolor(9);
   cprintf("6.-SALIR\n\n");
   printf("\n\t\tElija una opcion: \t\t");
    scanf("%d",&opcion);

  switch(opcion)  /*Opcion Multiple de acuerdo al menu*/
        {
         case 1:
               printf("\n\n\tCuantos alumnos desea ingresar?: ");
               scanf("%d",&cant);

               /*El programa no acepta numeros negativos*/

                if((cant<1) || (cant >100))
                 {printf("\n\t\t\tIngrese al menos 1 alumno ;-) !!!\n");}

                else
                   ingresar(alum,calif,cant); //Llamado de funcion y
                   getch();                         //paso de parametros
                break;                            //por referencia

         case 2:
                if(cant <1){/*No imprime si no hay datos*/
                  printf("\n\n\t\t\tNo existen datos del alumno :-( ");}
                else
                  imprimir(alum,calif,cant); //Llamado de funcion
                 getch();
                break;

         case 3:
                if(cant<1){/*No muestra promedio si no hay calificacion*/
                  printf("\n\n\t\t\tNo existen calificaciones :-( ");}
                else
                  promedio(calif,cant);//Llamado de funcion
                    getch();
                break;

         case 4: if(cant<1){
                    printf("\n\n\t\t\tNo existen datos de alumnos!"); }
                 else{
                  fflush(stdin);
                  system("cls");
                   printf("\n\tORDENAR POR:\n\n");
                   printf("\tA)NOMBRE\n\tB)CALIFICACION\n\n");
                   printf("\tElija A o B:  ");
                   scanf("%s",&op4);}
                   getch();
             switch(op4)
                   {
                    case 'a': case 'A': ordenaXnombre(alum,calif,cant);
                      printf("\nNombres Ordenados!!\n");
                      system("pause");
                      break;

                    case 'b': case 'B': ordenaXcalificacion(alum,calif,cant);
                      printf("\nCalificaciones Ordenadas!!\n");
                      system("pause");
                      break;

                    default: printf("\t\tOpcion NO valida\n");
                      system("pause");
                       break;
                   }break;

         case 5: if(cant<1)
                  printf("\n\t\t\tNo existen datos de alumnos!");
                 else{
                     fflush(stdin);
                     system("cls");
                     printf("\nIngrese el Nombre: ");
                     scanf("%s",&nom);
                         buscalumno(alum,nom,calif,cant);}
                     getch();
                 break;

         case 6: if(opcion == 6){
                  printf("\n\t\t\tSeguro que desea SALIR? A.Si B.No  ");
                  scanf("%s",&op3);
                    if((op3 == 'a')||(op3 =='A'))
                    exit(0);} //Sale del programa
                  break;

               default:
                       printf("\n\tOpcion no valida!");
                       getch();
                       break;
               }

  }
    while(opcion != 6);
         getch();
 }
       /*Desarrollo de las Funciones*/
    void ingresar(char a[][50],float cal[],int t)
     {
        int i;
      for(i=0;i<t;i++){ //Ingresa los datos del alumno en Arreglos paralelos
        fflush(stdin);
        printf("\n\n\tNombre: ", i);
        gets(a[i]);
        printf("\n\n\tCalificacion: ", i);
        scanf("%f",&cal[i]); }
         printf("\n\n\tEstudiante(s) almacenado(s) con exito! Presione Enter(x2) para continuar.\n\n");
      getch();
     }

    void imprimir(char a[][50],float cal[],int t)
     {                            //Impresion de datos en forma de tabla
       gotoxy(17,29);
       printf("%s%s%s","INDICE "," NOMBRE","\t\tCALIFICACION\n\n");
       for(int i=0; i<t; i++){
        printf("\t\t%d\t%s\t\t%f\n",i+1,a[i],cal[i]);}
      getch();
     }

    void promedio(float cal[], int t)
     {
      float prom = 0;
      for(int i=0; i<t; ++i){
         prom+=cal[i];} //Sumatoria de calificaciones
         printf("\n\n\tEl promedio del grupo es: %f", prom/t);
      getch();
     }

  void ordenaXnombre(char a[][50],float cal[], int t)
  {
   int i,j,k; char aux[50];float auxcal;

   for(i=0;i<t-1;i++)
    {
       k = i;
      strcpy(aux,a[i]);
      for(j=i+1;j<t;j++)
         {
           if(strcmp(a[j],aux)< 0)
             {
              k=j;
              strcpy(aux,a[j]);
             }
         }
              auxcal=cal[i];
              cal[i]=cal[k];
              cal[k]=auxcal;
              strcpy(a[k],a[i]);
              strcpy(a[i],aux);
    }
     gotoxy(17,18);
     printf("%s%s%s","INDICE "," NOMBRE","\t\tCALIFICACION\n\n");
       for(int i=0; i<t; i++){
        printf("\t\t%d\t%s\t\t%f\n\n",i+1,a[i],cal[i]);}
      getch();
  }


  void ordenaXcalificacion(char a[][50],float cal[], int t)
  {
   int i,j,k; char aux[50];float auxcal;

   for(i=0;i<t-1;i++)
    {
       k = i;
      for(j=i+1;j<t;j++)
         {
           if(cal[k]>cal[j])
             {
              k=j;
              auxcal=cal[i];
              cal[i]=cal[k];
              cal[k]=auxcal;
              strcpy(aux,a[j]);
              strcpy(a[k],a[i]);
              strcpy(a[i],aux);
             }
         }
    }
    gotoxy(17,18);
     printf("%s%s%s","INDICE "," NOMBRE","\t\tCALIFICACION\n\n");
       for(int i=0; i<t; i++){
        printf("\t\t%d\t%s\t\t%f\n\n",i+1,a[i],cal[i]);}
      getch();
  }

  void buscalumno(char a[][50],char nom[50],float cal[], int t)
   {
    int i,c=-1;
     for(i=0;i<t;i++)
       if(strcmp(a[i],nom)==0)
         {
          printf("\n\nNombre: %s\n",a[i]);
          printf("\nCalificacion: %f",cal[i]);
          c=i+1;
          break;
         }
         if(c==-1) printf("\n\nEste(a) alumno(a) no ha sido ingresado(a)!");
      getch();
   }
