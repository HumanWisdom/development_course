import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49100Page } from './s49100.page';

describe('S49100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49100Page;
  let fixture: ComponentFixture<S49100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
