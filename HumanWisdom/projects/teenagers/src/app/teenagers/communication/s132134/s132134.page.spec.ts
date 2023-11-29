import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132134Page } from './s132134.page';

describe('S132134Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132134Page;
  let fixture: ComponentFixture<S132134Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132134Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132134Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
