import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49074Page } from './s49074.page';

describe('S49074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49074Page;
  let fixture: ComponentFixture<S49074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
