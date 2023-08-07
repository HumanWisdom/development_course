import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132238Page } from './s132238.page';

describe('S132238Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132238Page;
  let fixture: ComponentFixture<S132238Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132238Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132238Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
