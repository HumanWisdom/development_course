import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116094Page } from './s116094.page';

describe('S116094Page', () => {
      
    let component:  S116094Page;
  let fixture: ComponentFixture<S116094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
