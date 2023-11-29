import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132234Page } from './s132234.page';

describe('S132234Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132234Page;
  let fixture: ComponentFixture<S132234Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132234Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132234Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
