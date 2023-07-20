import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132200Page } from './s132200.page';

describe('S132200Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132200Page;
  let fixture: ComponentFixture<S132200Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132200Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132200Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
