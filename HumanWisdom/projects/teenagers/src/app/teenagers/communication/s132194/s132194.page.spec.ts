import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132194Page } from './s132194.page';

describe('S132194Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132194Page;
  let fixture: ComponentFixture<S132194Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132194Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132194Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
