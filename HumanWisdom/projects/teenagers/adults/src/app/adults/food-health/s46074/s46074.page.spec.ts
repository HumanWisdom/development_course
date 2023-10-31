import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46074Page } from './s46074.page';

describe('S46074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46074Page;
  let fixture: ComponentFixture<S46074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
