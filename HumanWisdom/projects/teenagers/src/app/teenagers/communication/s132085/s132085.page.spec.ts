import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132085Page } from './s132085.page';

describe('S132085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132085Page;
  let fixture: ComponentFixture<S132085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
