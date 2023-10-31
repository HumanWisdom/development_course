import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62184Page } from './s62184.page';

describe('S62184Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62184Page;
  let fixture: ComponentFixture<S62184Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62184Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62184Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
