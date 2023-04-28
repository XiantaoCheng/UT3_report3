var shape, pt, eulers;


pt=[-2.35, 5.0, 9.275];
pt1=[-pt[1],pt[2],-pt[0]];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addCylinder(0.05,10.0,pt[0],pt[1],pt[2]+10.0/2);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');
world_3D.setRotationByEuler(shape,0.0, 0.0, 0.0);
world_3D.rotateInWorld(shape,pt1,eulers[2],'Y');
world_3D.rotateInWorld(shape,pt1,-eulers[1],'Z');
world_3D.rotateInWorld(shape,pt1,eulers[0],'Y');


pt=[-4.85, 0.27499999999999997, 10.274999999999999];
eulers=[0.0, 90.0, -90.0];
shape=world_3D.addBox(2.5,2.5,0.5499999999999999,pt[0],pt[1],pt[2]+0.5499999999999999/2);
world_3D.rotateInWorld(shape,[-4.85, 0.27499999999999997, 10.274999999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-4.85, 0.27499999999999997, 10.274999999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[-4.85, 0.27499999999999997, 10.274999999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, -2.1249999999999996, 10.274999999999999];
eulers=[90.0, 90.0, -90.0];
shape=world_3D.addBox(6.5,1.0,3.0,pt[0],pt[1],pt[2]+3.0/2);
world_3D.rotateInWorld(shape,[-6.35, -2.1249999999999996, 10.274999999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, -2.1249999999999996, 10.274999999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, -2.1249999999999996, 10.274999999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 2.125, 10.274999999999999];
eulers=[90.0, 90.0, -90.0];
shape=world_3D.addBox(6.5,1.0,3.0,pt[0],pt[1],pt[2]+3.0/2);
world_3D.rotateInWorld(shape,[-6.35, 2.125, 10.274999999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 2.125, 10.274999999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 2.125, 10.274999999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, -0.45000000000000007, 10.274999999999999];
eulers=[90.0, 90.0, 0.0];
shape=world_3D.addBox(0.35,3.0,3.0,pt[0],pt[1],pt[2]+3.0/2);
world_3D.rotateInWorld(shape,[-6.35, -0.45000000000000007, 10.274999999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, -0.45000000000000007, 10.274999999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, -0.45000000000000007, 10.274999999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 0.45000000000000007, 10.274999999999999];
eulers=[90.0, 90.0, 180.0];
shape=world_3D.addBox(0.35,3.0,3.0,pt[0],pt[1],pt[2]+3.0/2);
world_3D.rotateInWorld(shape,[-6.35, 0.45000000000000007, 10.274999999999999],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 0.45000000000000007, 10.274999999999999],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 0.45000000000000007, 10.274999999999999],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, -0.2386363636363631, 10.888636363636362];
shape=world_3D.addExtrudePolygon([-1.6363636363636362, 2.8636363636363638, 2.8636363636363638, -1.6363636363636362, -1.6363636363636362, 3.8636363636363633, 3.8636363636363633, -2.636363636363636, -2.636363636363636, -1.6363636363636362, -1.6363636363636362],[0.8636363636363636, 0.8636363636363636, -0.38636363636363635, -0.38636363636363635, -1.3863636363636365, -1.3863636363636365, 1.8636363636363638, 1.8636363636363638, -1.3863636363636365, -1.3863636363636365, 0.8636363636363636],3.0, pt[0], pt[1], pt[2]);
world_3D.setRotationByEuler(shape,90.0, 90.0, -90.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');


pt=[3.673391308266864, 3.75, 6.941795834829883];
eulers=[0.0, 90.0, 1.2999999999999399];
shape=world_3D.addBox(12.5,0.05,7.5,pt[0],pt[1],pt[2]+7.5/2);
world_3D.rotateInWorld(shape,[3.673391308266864, 3.75, 6.941795834829883],eulers[2],'Z');
world_3D.rotateInWorld(shape,[3.673391308266864, 3.75, 6.941795834829883],eulers[1],'X');
world_3D.rotateInWorld(shape,[3.673391308266864, 3.75, 6.941795834829883],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[6.349999999999999, 2.3, 1.2749999999999997];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(0.65,0.65,4.6,pt[0],pt[1],pt[2]+4.6/2);
world_3D.rotateInWorld(shape,[6.349999999999999, 2.3, 1.2749999999999997],eulers[2],'Z');
world_3D.rotateInWorld(shape,[6.349999999999999, 2.3, 1.2749999999999997],eulers[1],'X');
world_3D.rotateInWorld(shape,[6.349999999999999, 2.3, 1.2749999999999997],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-6.35, 2.3, 1.2749999999999997];
eulers=[0.0, 90.0, 0.0];
shape=world_3D.addBox(0.65,0.65,4.6,pt[0],pt[1],pt[2]+4.6/2);
world_3D.rotateInWorld(shape,[-6.35, 2.3, 1.2749999999999997],eulers[2],'Z');
world_3D.rotateInWorld(shape,[-6.35, 2.3, 1.2749999999999997],eulers[1],'X');
world_3D.rotateInWorld(shape,[-6.35, 2.3, 1.2749999999999997],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



pt=[-1.1250000000000009, -2.3000000000000003, 7.426910299003321];
shape=world_3D.addExtrudePolygon([-1.4999999999999978, -6.499999999999999, -6.499999999999999, 8.75, 8.75, -1.4999999999999987, -1.4999999999999978],[5.323089700996679, 5.323089700996679, -7.426910299003321, -7.426910299003321, -0.4385382059800644, -0.6769102990033207, 5.323089700996679],0.8, pt[0], pt[1], pt[2]);
world_3D.setRotationByEuler(shape,0.0, 90.0, 0.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');


pt=[-1.1250000000000009, 3.1000000000000005, 7.426910299003321];
shape=world_3D.addExtrudePolygon([-1.4999999999999978, -6.499999999999999, -6.499999999999999, 8.75, 8.75, -1.4999999999999987, -1.4999999999999978],[5.323089700996679, 5.323089700996679, -7.426910299003321, -7.426910299003321, -0.4385382059800644, -0.6769102990033207, 5.323089700996679],0.8, pt[0], pt[1], pt[2]);
world_3D.setRotationByEuler(shape,0.0, 90.0, 0.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');



animate_3D();
world_3D.update();
