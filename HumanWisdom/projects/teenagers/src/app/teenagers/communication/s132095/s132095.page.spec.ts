import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132095Page } from './s132095.page';

describe('S132095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132095Page;
  let fixture: ComponentFixture<S132095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
