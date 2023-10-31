import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49009Page } from './s49009.page';

describe('S49009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49009Page;
  let fixture: ComponentFixture<S49009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
