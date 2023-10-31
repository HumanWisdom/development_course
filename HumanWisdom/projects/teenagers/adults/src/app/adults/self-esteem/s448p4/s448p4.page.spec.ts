import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p4Page } from './s448p4.page';

describe('S448p4Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p4Page;
  let fixture: ComponentFixture<S448p4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
