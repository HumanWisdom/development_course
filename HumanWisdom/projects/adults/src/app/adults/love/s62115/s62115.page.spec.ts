import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62115Page } from './s62115.page';

describe('S62115Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62115Page;
  let fixture: ComponentFixture<S62115Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62115Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62115Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
