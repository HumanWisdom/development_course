import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117074Page } from './s117074.page';

describe('S117074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117074Page;
  let fixture: ComponentFixture<S117074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
