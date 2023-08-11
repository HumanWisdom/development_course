import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134056Page } from './s134056.page';

describe('S134056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134056Page;
  let fixture: ComponentFixture<S134056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
