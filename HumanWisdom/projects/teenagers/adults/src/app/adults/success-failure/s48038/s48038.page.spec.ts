import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48038Page } from './s48038.page';

describe('S48038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48038Page;
  let fixture: ComponentFixture<S48038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
