import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73089Page } from './s73089.page';

describe('S73089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73089Page;
  let fixture: ComponentFixture<S73089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
