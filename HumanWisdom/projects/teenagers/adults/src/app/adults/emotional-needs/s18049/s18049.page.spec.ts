import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18049Page } from './s18049.page';

describe('S18049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18049Page;
  let fixture: ComponentFixture<S18049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
