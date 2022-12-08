import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62157Page } from './s62157.page';

describe('S62157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62157Page;
  let fixture: ComponentFixture<S62157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
