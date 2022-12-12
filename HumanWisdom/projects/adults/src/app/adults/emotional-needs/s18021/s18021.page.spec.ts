import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18021Page } from './s18021.page';

describe('S18021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18021Page;
  let fixture: ComponentFixture<S18021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
