import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132076Page } from './s132076.page';

describe('S132076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132076Page;
  let fixture: ComponentFixture<S132076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
