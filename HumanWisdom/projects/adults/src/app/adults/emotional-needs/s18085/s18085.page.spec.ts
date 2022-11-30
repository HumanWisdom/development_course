import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18085Page } from './s18085.page';

describe('S18085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18085Page;
  let fixture: ComponentFixture<S18085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
