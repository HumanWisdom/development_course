import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18060Page } from './s18060.page';

describe('S18060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18060Page;
  let fixture: ComponentFixture<S18060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
