import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132178Page } from './s132178.page';

describe('S132178Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132178Page;
  let fixture: ComponentFixture<S132178Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132178Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132178Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
