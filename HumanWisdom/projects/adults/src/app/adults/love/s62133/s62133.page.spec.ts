import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62133Page } from './s62133.page';

describe('S62133Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62133Page;
  let fixture: ComponentFixture<S62133Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62133Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62133Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
