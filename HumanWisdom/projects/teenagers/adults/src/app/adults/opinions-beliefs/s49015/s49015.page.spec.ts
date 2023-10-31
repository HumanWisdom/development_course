import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49015Page } from './s49015.page';

describe('S49015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49015Page;
  let fixture: ComponentFixture<S49015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
