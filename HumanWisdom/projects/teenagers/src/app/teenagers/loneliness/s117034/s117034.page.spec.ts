import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117034Page } from './s117034.page';

describe('S117034Page', () => {
  // let   
    let component:  S117034Page;
  let fixture: ComponentFixture<S117034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
