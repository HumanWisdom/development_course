import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132109Page } from './s132109.page';

describe('S132109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132109Page;
  let fixture: ComponentFixture<S132109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
