import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132145Page } from './s132145.page';

describe('S132145Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132145Page;
  let fixture: ComponentFixture<S132145Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132145Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132145Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
