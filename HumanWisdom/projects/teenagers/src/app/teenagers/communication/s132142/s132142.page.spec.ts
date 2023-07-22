import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132142Page } from './s132142.page';

describe('S132142Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132142Page;
  let fixture: ComponentFixture<S132142Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132142Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132142Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
