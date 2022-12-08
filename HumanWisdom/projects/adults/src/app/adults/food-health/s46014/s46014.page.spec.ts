import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46014Page } from './s46014.page';

describe('S46014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46014Page;
  let fixture: ComponentFixture<S46014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
