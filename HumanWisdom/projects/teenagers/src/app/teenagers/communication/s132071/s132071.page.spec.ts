import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132071Page } from './s132071.page';

describe('S132071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132071Page;
  let fixture: ComponentFixture<S132071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
