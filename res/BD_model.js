var shape, pt, eulers;


pt=[18.560463846153844, 20.32, 2.7035369230769235];
shape=world_3D.addExtrudePolygon([0.19108615384615668, 0.19108615384615668, 1.7595361538461585, 1.7595361538461585, -1.7913838461538434, -1.7913838461538434, -0.22293384615383882, -0.22293384615384715, -1.7913838461538434, -1.7913838461538434, 1.7595361538461585, 1.7595361538461585, 0.19108615384615668],[1.9624430769230772, -2.2895169230769237, -2.2895169230769237, -2.7035369230769235, -2.7035369230769235, -2.2895169230769237, -2.2895169230769237, 1.9624430769230772, 1.9624430769230765, 2.3764630769230766, 2.3764630769230766, 1.9624430769230765, 1.9624430769230772],40.64, pt[0], pt[1], pt[2]);
world_3D.setRotationByEuler(shape,0.0, 90.0, 0.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');


pt=[-18.52861615384615, 20.32, 2.7035369230769235];
shape=world_3D.addExtrudePolygon([0.19108615384615668, 0.19108615384614835, 1.759536153846153, 1.759536153846153, -1.791383846153849, -1.791383846153849, -0.22293384615384715, -0.22293384615384715, -1.791383846153849, -1.791383846153849, 1.759536153846153, 1.759536153846153, 0.19108615384615668],[1.9624430769230772, -2.2895169230769237, -2.2895169230769237, -2.7035369230769235, -2.7035369230769235, -2.2895169230769237, -2.2895169230769237, 1.9624430769230772, 1.9624430769230765, 2.3764630769230766, 2.3764630769230766, 1.9624430769230765, 1.9624430769230772],40.64, pt[0], pt[1], pt[2]);
world_3D.setRotationByEuler(shape,0.0, 90.0, 0.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');


pt=[0.0, 0.0, 5.08];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(40.64,40.64,1.27,pt[0],pt[1],pt[2]+1.27/2);
world_3D.rotateInWorld(shape,[0.0, 0.0, 5.08],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 0.0, 5.08],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 0.0, 5.08],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[0.0, 0.0, 6.35];
pt1=[-pt[1],pt[2],-pt[0]];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addCylinder(10.624693,37.625,pt[0],pt[1],pt[2]+37.625/2);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');
world_3D.setRotationByEuler(shape,0.0, 0.0, 0.0);
world_3D.rotateInWorld(shape,pt1,eulers[2],'Y');
world_3D.rotateInWorld(shape,pt1,-eulers[1],'Z');
world_3D.rotateInWorld(shape,pt1,eulers[0],'Y');


pt=[0.0, 0.0, 43.975];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(40.64,40.64,1.27,pt[0],pt[1],pt[2]+1.27/2);
world_3D.rotateInWorld(shape,[0.0, 0.0, 43.975],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 0.0, 43.975],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 0.0, 43.975],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[0.0, -15.875, 79.135];
eulers=[0.0, 0.0, 90.0];
shape=world_3D.addBox(8.89,22.860000000000003,17.78,pt[0],pt[1],pt[2]+17.78/2);
world_3D.rotateInWorld(shape,[0.0, -15.875, 79.135],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, -15.875, 79.135],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, -15.875, 79.135],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[0.0, 15.875, 79.135];
eulers=[0.0, 0.0, -90.0];
shape=world_3D.addBox(8.89,22.860000000000003,17.78,pt[0],pt[1],pt[2]+17.78/2);
world_3D.rotateInWorld(shape,[0.0, 15.875, 79.135],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 15.875, 79.135],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 15.875, 79.135],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[15.875, 0.0, 79.135];
eulers=[0.0, 0.0, -180.0];
shape=world_3D.addBox(8.89,40.64,17.78,pt[0],pt[1],pt[2]+17.78/2);
world_3D.rotateInWorld(shape,[15.875, 0.0, 79.135],eulers[2],'Z');
world_3D.rotateInWorld(shape,[15.875, 0.0, 79.135],eulers[1],'X');
world_3D.rotateInWorld(shape,[15.875, 0.0, 79.135],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-15.875, 0.0, 79.135];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(8.89,40.64,17.78,pt[0],pt[1],pt[2]+17.78/2);
world_3D.rotateInWorld(shape,[-15.875, 0.0, 79.135],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-15.875, 0.0, 79.135],eulers[1],'X');
world_3D.rotateInWorld(shape,[-15.875, 0.0, 79.135],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[0.0, 0.0, 96.91499999999999];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(40.64,40.64,8.89,pt[0],pt[1],pt[2]+8.89/2);
world_3D.rotateInWorld(shape,[0.0, 0.0, 96.91499999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 0.0, 96.91499999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 0.0, 96.91499999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[0.0, 0.0, 45.245000000000005];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(40.64,40.64,8.89,pt[0],pt[1],pt[2]+8.89/2);
world_3D.rotateInWorld(shape,[0.0, 0.0, 45.245000000000005],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 0.0, 45.245000000000005],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 0.0, 45.245000000000005],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[10.16, 5.08, 63.025];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(2.54,10.16,10.16,pt[0],pt[1],pt[2]+10.16/2);
world_3D.rotateInWorld(shape,[10.16, 5.08, 63.025],eulers[2],'Z');
world_3D.rotateInWorld(shape,[10.16, 5.08, 63.025],eulers[1],'X');
world_3D.rotateInWorld(shape,[10.16, 5.08, 63.025],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[3.8099999999999996, 10.16, 65.565];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,2.54,pt[0],pt[1],pt[2]+2.54/2);
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 65.565],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 65.565],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 65.565],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[3.8099999999999996, -7.62, 65.565];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,2.54,pt[0],pt[1],pt[2]+2.54/2);
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 65.565],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 65.565],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 65.565],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[3.8099999999999996, 10.16, 60.485];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,2.54,pt[0],pt[1],pt[2]+2.54/2);
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 60.485],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 60.485],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.8099999999999996, 10.16, 60.485],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[3.8099999999999996, -7.62, 60.485];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,2.54,pt[0],pt[1],pt[2]+2.54/2);
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 60.485],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 60.485],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.8099999999999996, -7.62, 60.485],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[3.8099999999999996, 7.62, 63.025];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,17.78,15.24,pt[0],pt[1],pt[2]+15.24/2);
world_3D.rotateInWorld(shape,[3.8099999999999996, 7.62, 63.025],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.8099999999999996, 7.62, 63.025],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.8099999999999996, 7.62, 63.025],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 7.62, 70.645];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,2.54,15.24,pt[0],pt[1],pt[2]+15.24/2);
world_3D.rotateInWorld(shape,[-6.35, 7.62, 70.645],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 7.62, 70.645],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 7.62, 70.645],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 10.16, 66.835];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,20.32,pt[0],pt[1],pt[2]+20.32/2);
world_3D.rotateInWorld(shape,[-6.35, 10.16, 66.835],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 10.16, 66.835],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 10.16, 66.835],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, -1.27, 63.025];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,2.54,10.16,pt[0],pt[1],pt[2]+10.16/2);
world_3D.rotateInWorld(shape,[-6.35, -1.27, 63.025],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, -1.27, 63.025],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, -1.27, 63.025],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 11.430000000000001, 63.025];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,2.54,10.16,pt[0],pt[1],pt[2]+10.16/2);
world_3D.rotateInWorld(shape,[-6.35, 11.430000000000001, 63.025],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 11.430000000000001, 63.025],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 11.430000000000001, 63.025],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 10.16, 59.214999999999996];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,5.08,20.32,pt[0],pt[1],pt[2]+20.32/2);
world_3D.rotateInWorld(shape,[-6.35, 10.16, 59.214999999999996],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 10.16, 59.214999999999996],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 10.16, 59.214999999999996],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 7.62, 55.405];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(10.16,2.54,15.24,pt[0],pt[1],pt[2]+15.24/2);
world_3D.rotateInWorld(shape,[-6.35, 7.62, 55.405],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 7.62, 55.405],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 7.62, 55.405],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');




animate_3D();
world_3D.update();
