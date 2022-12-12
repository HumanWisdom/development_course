import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62050Page } from './s62050.page';

describe('S62050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62050Page;
  let fixture: ComponentFixture<S62050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
