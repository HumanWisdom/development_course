import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18018Page } from './s18018.page';

describe('S18018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18018Page;
  let fixture: ComponentFixture<S18018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
