import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132192Page } from './s132192.page';

describe('S132192Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132192Page;
  let fixture: ComponentFixture<S132192Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132192Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132192Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
