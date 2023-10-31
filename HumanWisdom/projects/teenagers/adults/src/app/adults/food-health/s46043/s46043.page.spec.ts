import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46043Page } from './s46043.page';

describe('S46043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46043Page;
  let fixture: ComponentFixture<S46043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
