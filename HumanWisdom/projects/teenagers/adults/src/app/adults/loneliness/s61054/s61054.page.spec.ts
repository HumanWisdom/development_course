import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61054Page } from './s61054.page';

describe('S61054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61054Page;
  let fixture: ComponentFixture<S61054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
