import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53014Page } from './s53014.page';

describe('S53014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53014Page;
  let fixture: ComponentFixture<S53014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
