import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132180Page } from './s132180.page';

describe('S132180Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132180Page;
  let fixture: ComponentFixture<S132180Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132180Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132180Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
