import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49063Page } from './s49063.page';

describe('S49063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49063Page;
  let fixture: ComponentFixture<S49063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
