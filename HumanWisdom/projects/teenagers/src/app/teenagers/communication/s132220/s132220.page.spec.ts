import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132220Page } from './s132220.page';

describe('S132220Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132220Page;
  let fixture: ComponentFixture<S132220Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132220Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132220Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
