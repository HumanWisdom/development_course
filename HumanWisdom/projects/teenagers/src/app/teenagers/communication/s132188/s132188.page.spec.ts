import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132188Page } from './s132188.page';

describe('S132188Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132188Page;
  let fixture: ComponentFixture<S132188Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132188Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132188Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
