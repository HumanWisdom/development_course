import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141112Page } from './s141112.page';

describe('S141112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141112Page;
  let fixture: ComponentFixture<S141112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
