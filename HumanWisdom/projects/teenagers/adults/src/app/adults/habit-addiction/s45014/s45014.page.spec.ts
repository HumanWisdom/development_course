import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45014Page } from './s45014.page';

describe('S45014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45014Page;
  let fixture: ComponentFixture<S45014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
